# Dual AI Workflow Guide - EyeCare Center OC

## 🎯 Quick Reference: Which AI for Which Task?

### Use Cursor for:
- ✅ Fix typos
- ✅ Update colors/strings/numbers
- ✅ Quick CSS tweaks
- ✅ Rename files
- ✅ Simple edits

### Use Claude Code for:
- ✅ New features
- ✅ Debugging issues
- ✅ API integrations
- ✅ Multi-file refactoring
- ✅ Writing tests
- ✅ Performance optimization
- ✅ Documentation

## 🔄 Workflow Patterns

### Pattern 1: New Feature
1. **Claude Code**: Plan and implement feature
2. **Test**: Verify functionality
3. **Cursor**: Quick polish (typos, colors, spacing)
4. **Commit**: Push to GitHub

### Pattern 2: Bug Fix
1. **Claude Code**: Debug and fix complex issue
2. **Test**: Verify fix works
3. **Cursor**: Clean up any formatting
4. **Commit**: Document the fix

### Pattern 3: Content Updates
1. **Cursor**: Update copy, colors, simple values
2. **Test**: Quick visual check
3. **Commit**: Simple change, simple commit

## 💰 Token Economics

### Cursor API Costs
- **Composer**: ~$0.50-2.00 per complex request
- **Chat**: ~$0.10-0.50 per request
- **Simple edits**: ~$0.01-0.05

### Claude Code
- **Unlimited context**: No token limits
- **Best for**: Long conversations, deep analysis

### Cost Savings Example
```
Task: "Debug form submission and implement retry logic"

Cursor Cost: $2-5 (multiple back-and-forth)
Claude Code: $0 (unlimited)

Savings: $2-5 per complex task
```

## 📝 Communication Templates

### For Cursor (when deferring)
```
"This requires [complex analysis/multi-file work/debugging].
For token efficiency, please use Claude Code for this task.
I can help with quick edits afterward!"
```

### For Claude Code (when suggesting Cursor)
```
"This is a simple [typo/color/value] change.
Cursor can handle this quickly without using my unlimited context.
But I'm happy to do it if you prefer!"
```

## 🎯 Decision Tree

```
User Request
    ↓
Is it < 5 minutes of simple edits?
    ↓
YES → Use Cursor
    ↓
NO → Does it need deep analysis?
    ↓
YES → Use Claude Code
    ↓
NO → Is it multi-file work?
    ↓
YES → Use Claude Code
    ↓
NO → Use Cursor (probably simple)
```

## ⚡ Quick Commands

### Starting Work Session
```bash
# Check what Cursor is working on
git log --oneline -10

# See current changes
git status

# Start Claude Code for complex work
# (just start asking questions!)

# Use Cursor for quick edits
# (open Cursor, make changes, done!)
```

## 🤝 Collaboration Tips

### Before Starting Work
1. Check `git status` for active changes
2. Check recent commits to see who's working where
3. Coordinate if working on same files

### During Work
1. Commit frequently with clear messages
2. Push to `cursor` branch
3. Communicate between AIs via commit messages

### After Completing Task
1. Test thoroughly
2. Commit with descriptive message
3. Push to GitHub
4. Update documentation if needed

## 📊 Real Examples

### ✅ Good - Cursor Handled
```
User: "Change button text from 'Submit' to 'Send'"
Cursor: [Makes change immediately]
Time: 30 seconds
Cost: $0.01
```

### ✅ Good - Claude Code Handled
```
User: "Debug why form isn't submitting"
Claude Code: [Analyzes multiple files, finds root cause, fixes]
Time: 5 minutes
Cost: $0 (unlimited)
```

### ❌ Bad - Wrong Tool
```
User: "Debug form submission"
Cursor: [Attempts debugging, uses $2 in tokens, gets stuck]
Should have used: Claude Code from the start
```

## 🎓 Learning from Experience

### Patterns to Recognize

**Simple = Single action, single file, known location**
- Fix typo in header → Cursor
- Update color value → Cursor
- Change text → Cursor

**Complex = Multiple steps, analysis, multiple files**
- Debug performance → Claude Code
- Add new feature → Claude Code
- Refactor component → Claude Code

**Borderline = Start simple, escalate if needed**
- Start with Cursor for quick fix attempt
- If it gets complex, switch to Claude Code
- Learn from which ones needed escalation

## 🚀 Optimization Strategies

### Daily Workflow
- **Morning**: Review with Claude Code (planning)
- **During day**: Quick edits with Cursor
- **Complex tasks**: Claude Code as needed
- **End of day**: Review with Claude Code

### Project Phases
- **Planning**: Claude Code (architecture)
- **Implementation**: Both (features = Claude, tweaks = Cursor)
- **Polish**: Cursor (quick edits)
- **Testing**: Claude Code (complex scenarios)

## 📈 Success Metrics

Track your usage to optimize:
- How many tasks went to wrong AI first?
- How much could you have saved?
- Which patterns work best?

## 💡 Pro Tips

1. **Start small with Cursor** - Try simple first, escalate if needed
2. **Use Claude Code liberally** - Unlimited context = no penalty
3. **Batch simple edits** - Group quick changes for Cursor
4. **Document patterns** - Learn which tasks need which AI
5. **Communicate clearly** - Tell AIs what the other is doing

## 🎯 Remember

**Cursor = Fast & Cheap for Simple**
**Claude Code = Unlimited Context for Complex**

When in doubt, use Claude Code. It's free and powerful!
