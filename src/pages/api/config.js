import fs from 'fs';
import path from 'path';

export default function config() {
    const config = JSON.parse(fs.readFileSync(path.join(process.cwd(), "app.config.json"), { endocoding: "utf8"}));
    return config;
} 