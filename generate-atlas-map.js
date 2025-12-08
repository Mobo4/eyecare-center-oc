import fs from 'fs';
import path from 'path';

const atlasDir = path.join(process.cwd(), 'public', 'images', 'atlas');
const outputFile = path.join(process.cwd(), 'lib', 'generated-atlas-map.ts');

try {
    const files = fs.readdirSync(atlasDir)
        .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));

    const content = `/**
 * Auto-generated list of Atlas Images
 * Generated on: ${new Date().toISOString()}
 * Total images: ${files.length}
 */

export const ATLAS_IMAGES = ${JSON.stringify(files, null, 2)};
`;

    fs.writeFileSync(outputFile, content);
    console.log(`Successfully generated map with ${files.length} images at ${outputFile}`);
} catch (error) {
    console.error('Error generating map:', error);
    process.exit(1);
}
