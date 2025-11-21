#!/usr/bin/env node

/**
 * Lighthouse Performance Audit Script
 *
 * Runs Lighthouse audits on key pages and generates performance reports
 *
 * Usage: node scripts/lighthouse-audit.js [url]
 */

import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';
import fs from 'fs';
import path from 'path';

const targetUrl = process.argv[2] || 'http://localhost:3000';

const config = {
  extends: 'lighthouse:default',
  settings: {
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    formFactor: 'desktop',
    throttling: {
      rttMs: 40,
      throughputKbps: 10240,
      cpuSlowdownMultiplier: 1
    },
    screenEmulation: {
      mobile: false,
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1,
      disabled: false
    }
  }
};

async function runAudit() {
  console.log(`🔍 Running Lighthouse audit on: ${targetUrl}\n`);

  const chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless', '--disable-gpu']
  });

  const options = {
    logLevel: 'info',
    output: 'html',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    port: chrome.port
  };

  try {
    const runnerResult = await lighthouse(targetUrl, options, config);

    // Extract scores
    const { lhr } = runnerResult;
    const scores = {
      performance: Math.round(lhr.categories.performance.score * 100),
      accessibility: Math.round(lhr.categories.accessibility.score * 100),
      bestPractices: Math.round(lhr.categories['best-practices'].score * 100),
      seo: Math.round(lhr.categories.seo.score * 100),
    };

    // Core Web Vitals
    const metrics = {
      FCP: lhr.audits['first-contentful-paint'].displayValue,
      LCP: lhr.audits['largest-contentful-paint'].displayValue,
      TBT: lhr.audits['total-blocking-time'].displayValue,
      CLS: lhr.audits['cumulative-layout-shift'].displayValue,
      SI: lhr.audits['speed-index'].displayValue,
    };

    console.log('📊 Lighthouse Scores:');
    console.log(`   Performance: ${scores.performance}/100`);
    console.log(`   Accessibility: ${scores.accessibility}/100`);
    console.log(`   Best Practices: ${scores.bestPractices}/100`);
    console.log(`   SEO: ${scores.seo}/100\n`);

    console.log('⚡ Core Web Vitals:');
    console.log(`   First Contentful Paint (FCP): ${metrics.FCP}`);
    console.log(`   Largest Contentful Paint (LCP): ${metrics.LCP}`);
    console.log(`   Total Blocking Time (TBT): ${metrics.TBT}`);
    console.log(`   Cumulative Layout Shift (CLS): ${metrics.CLS}`);
    console.log(`   Speed Index: ${metrics.SI}\n`);

    // Save HTML report
    const reportPath = path.join(process.cwd(), 'lighthouse-report.html');
    fs.writeFileSync(reportPath, runnerResult.report);
    console.log(`📝 Full report saved to: ${reportPath}\n`);

    // Performance recommendations
    const opportunities = lhr.audits;
    const criticalOpportunities = Object.values(opportunities)
      .filter(audit => audit.score !== null && audit.score < 0.9 && audit.details?.overallSavingsMs > 100)
      .sort((a, b) => (b.details?.overallSavingsMs || 0) - (a.details?.overallSavingsMs || 0))
      .slice(0, 5);

    if (criticalOpportunities.length > 0) {
      console.log('💡 Top Performance Opportunities:');
      criticalOpportunities.forEach((audit, index) => {
        const savings = audit.details?.overallSavingsMs || 0;
        console.log(`   ${index + 1}. ${audit.title}: ~${Math.round(savings)}ms savings`);
      });
      console.log();
    }

    // Check if passing thresholds
    const passingThresholds = {
      performance: 85,
      accessibility: 95,
      bestPractices: 90,
      seo: 95
    };

    const failures = Object.entries(scores)
      .filter(([category, score]) => score < passingThresholds[category])
      .map(([category, score]) => `${category} (${score}/${passingThresholds[category]})`);

    if (failures.length > 0) {
      console.log(`⚠️  Failed thresholds: ${failures.join(', ')}\n`);
      process.exitCode = 1;
    } else {
      console.log('✅ All quality thresholds passed!\n');
    }

  } catch (error) {
    console.error('Error running Lighthouse:', error);
    process.exitCode = 1;
  } finally {
    await chrome.kill();
  }
}

runAudit().catch(err => {
  console.error(err);
  process.exit(1);
});
