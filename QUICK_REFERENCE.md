# Quick Reference - Claude Code + Cursor + Archon MCP

## 🚀 Everything You Need to Know

### ✅ What's Running
```
✅ Archon MCP     - http://localhost:8051/mcp (SSE)
✅ Archon UI      - http://localhost:3737
✅ Claude Code    - Connected to Archon MCP
✅ Cursor AI      - Connected to Archon MCP
```

---

## 🎯 How to Use Both AI Assistants Together

### Parallel Workflow Pattern

```
┌─────────────────────────────────────────────────────────────┐
│                    ARCHON MCP SERVER                        │
│              Shared Knowledge & Task Manager                │
│                 http://localhost:8051                       │
└──────────────────┬──────────────────────┬───────────────────┘
                   │                      │
         ┌─────────┴────────┐    ┌───────┴──────────┐
         │   CLAUDE CODE    │    │   CURSOR AI      │
         │   (Terminal)     │    │   (IDE)          │
         └──────────────────┘    └──────────────────┘
              Strategic              Tactical
              Analysis               Coding
              Planning              Editing
              Testing               Debugging
```

---

## 📋 Typical Workflow

### Morning: Start New Feature

**1. Claude Code (Terminal)**
```
"Search Archon knowledge base for Next.js SEO patterns"
"Create a specification for SEO optimization"
"Create tasks in Archon for implementing SEO"
```

**2. Cursor AI (IDE)**
```
Open files, start coding with AI autocomplete
Reference the spec Claude Code created
```

**3. Both Working Together**
- Claude Code: Runs tests, validates code
- Cursor: Makes fixes inline with AI assistance
- Both: Update task status in Archon

---

## 🛠️ Quick Commands

### Check Archon Status
```bash
docker ps --filter "name=archon"
```

### Restart Archon MCP
```bash
cd /Users/alex/Documents/Projects/Archon
docker compose restart archon-mcp
```

### View Archon Logs
```bash
docker logs archon-mcp --tail 50 -f
```

### Open Archon UI
```bash
open http://localhost:3737
```

---

## 💡 Pro Tips

### 1. Use Claude Code for Research
```
"Use Archon MCP to search for authentication patterns"
"Add this documentation to Archon knowledge base"
```

### 2. Use Cursor for Implementation
- Let Cursor's AI autocomplete use the knowledge
- Make quick edits with inline AI
- Visual debugging and refactoring

### 3. Share Task Progress
Both AI assistants see the same tasks:
```
Claude Code: "Mark the authentication task as complete"
Cursor: "What's my next task from Archon?"
```

### 4. Build Knowledge Base Together
```
Claude Code: Analyzes files, adds to knowledge base
Cursor: Uses that knowledge for better code suggestions
```

---

## 🎨 Archon MCP Tools Available

### In Claude Code (Terminal)
```
archon:search_knowledge(query="...")
archon:manage_task(action="create", title="...")
archon:perform_rag_query(query="...")
archon:manage_project(action="create", title="...")
```

### In Cursor AI (IDE)
Same tools! Just ask naturally:
```
"Search Archon for API examples"
"Create a task in Archon"
"What are my current tasks?"
```

---

## 🚨 When Things Go Wrong

### Cursor Not Connecting
1. Restart Cursor completely (Cmd+Q)
2. Check: `/Users/alex/Library/Application Support/Cursor/User/settings.json`
3. Verify `"archon"` is in `"mcp.servers"`

### Claude Code Not Connecting
1. Restart Claude Desktop app
2. Check: `/Users/alex/Library/Application Support/Claude/claude_desktop_config.json`
3. Verify `"archon"` is in `"mcpServers"`

### Archon MCP Down
```bash
docker ps --filter "name=archon-mcp"
# If not running:
cd /Users/alex/Documents/Projects/Archon
docker compose up -d archon-mcp
```

---

## 📍 Important Locations

### Config Files
- **Cursor**: `~/Library/Application Support/Cursor/User/settings.json`
- **Claude**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Archon**: `/Users/alex/Documents/Projects/Archon/.env`

### Archon Services
- **MCP Server**: Port 8051 (SSE transport)
- **Web UI**: Port 3737 (React interface)
- **Main Server**: Port 8181 (API - currently unhealthy but not needed)

### Project Files
- **Setup Doc**: `ARCHON_MCP_SETUP.md` (detailed setup)
- **This File**: `QUICK_REFERENCE.md` (quick reference)

---

## 🌟 Cool Things You Can Do

### 1. Cross-AI Task Management
```
Claude Code: "Create task: Implement dark mode"
[Work happens in Cursor with AI assistance]
Cursor: "Mark dark mode task complete"
```

### 2. Knowledge Sharing
```
Claude Code: "Analyze this codebase and add patterns to Archon"
Cursor: [Now has better autocomplete based on your patterns]
```

### 3. Parallel Development
```
Terminal 1 (Claude Code): Running tests, analysis
IDE (Cursor): Coding, editing, debugging
Both: Sharing context through Archon MCP
```

### 4. Documentation as You Go
```
Claude Code: "Document this API in Archon knowledge base"
Cursor: [Can now reference that documentation while coding]
```

---

## 🎓 Learn More

- **Archon UI**: http://localhost:3737
- **Full Setup**: See `ARCHON_MCP_SETUP.md`
- **Archon Docs**: `/Users/alex/Documents/Projects/Archon/README.md`

---

**You're all set! Start using both AI assistants together for maximum productivity.** 🚀
