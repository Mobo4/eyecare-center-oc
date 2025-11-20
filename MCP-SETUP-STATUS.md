# MCP Server Setup Status

**Date**: November 20, 2025
**Project**: EyeCare Center OC

## Current MCP Configuration

### ✅ Claude Code (CLI) - ACTIVE
**Location**: `~/Library/Application Support/Claude/claude_desktop_config.json`

**Connected MCP Servers**:
1. **filesystem** - File system access to:
   - `/Users/alex/Documents/VSCode_Apps`
   - `/Users/alex/Documents/Projects`
2. **memory** - Persistent memory/context
3. **github** - GitHub integration
4. **puppeteer** - Web automation
5. **n8n-mcp** - Workflow automation (localhost:5678)
6. **webflow** - Webflow CMS integration

**Status**: ✅ **WORKING** - All MCP servers accessible to Claude Code

### ✅ Cursor AI - CONFIGURED
**Location**: `~/.cursor/mcp_config.json`

**Connected MCP Servers**:
1. **filesystem** - Shared file access with Claude Code
2. **memory** - Shared memory/context with Claude Code

**Status**: ✅ **CONFIGURED** - Ready for use in Cursor IDE

## Shared Resources

### File System Access (Both Tools)
Both Claude Code and Cursor can now access:
- `/Users/alex/Documents/VSCode_Apps` - Development applications
- `/Users/alex/Documents/Projects` - All projects including this one

### Memory System (Both Tools)
Shared memory server allows:
- Context persistence across sessions
- Shared knowledge between Claude Code and Cursor
- Coordinated task understanding

## Archon MCP Status

### ⚠️ Archon Docker Services - NEEDS CONFIGURATION

**Issue**: Archon server failing due to Supabase connection error

**Available Archon Installations**:
1. `/Users/alex/Documents/Projects/Archon` - Main installation (Docker-based)
2. `/Users/alex/Documents/Projects/version-3-resilient-archon-orchestration` - Resilient version (Complex setup)

**Required for Full Archon**:
- Supabase database connection
- Docker services running
- Environment configuration

**Current Recommendation**: Use filesystem + memory MCP for now, add Archon later when needed

## How to Use

### Claude Code (Terminal/CLI)
Already connected! Just use normally:
```bash
claude-code
# MCP servers are automatically available
```

### Cursor (IDE)
1. Open Cursor IDE
2. Open project: `/Users/alex/Documents/Projects/eyecare-center-oc-old`
3. MCP servers should be automatically available through `~/.cursor/mcp_config.json`
4. Access through Cursor's AI chat interface

## Concurrent Usage Pattern

### Recommended Workflow:
```
Terminal (Claude Code):
├── Project analysis and planning
├── Multi-file refactoring
├── Documentation generation
├── Git operations
└── Testing and validation

IDE (Cursor):
├── Real-time code completion
├── Inline editing
├── Visual debugging
└── Component development
```

### Shared Context:
- Both tools access same filesystem
- Both tools share memory server
- Changes made by one are visible to the other
- Use git for coordination

## Next Steps to Add Archon

If you want full Archon orchestration:

1. **Fix Supabase Connection**:
   ```bash
   cd /Users/alex/Documents/Projects/Archon
   # Verify .env has correct SUPABASE_URL and SUPABASE_SERVICE_KEY
   # Test connection to Supabase
   ```

2. **Start Archon Services**:
   ```bash
   docker compose up -d
   ```

3. **Add to MCP Config**:
   ```json
   "archon": {
     "command": "docker",
     "args": ["exec", "-i", "archon-mcp", "python", "-m", "src.mcp_server"]
   }
   ```

## Current Status: ✅ READY FOR CONCURRENT USE

**Claude Code and Cursor can now work together on this project with shared context!**
