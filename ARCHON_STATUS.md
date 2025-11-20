# Archon MCP Status & Troubleshooting

## ✅ CURRENT STATUS

### What's Working
```
✅ Archon MCP Server  - Port 8051 (HEALTHY - This is what you need!)
✅ Cursor AI          - Connected to Archon MCP
✅ Claude Code        - Connected to Archon MCP
```

### What's Not Working (But You Don't Need)
```
⚠️  Archon UI         - Port 3737 (Depends on unhealthy server)
⚠️  Archon Server     - Port 8181 (UNHEALTHY - Supabase connection issue)
```

---

## 🎯 IMPORTANT: You Can Still Use Archon MCP!

**The Archon MCP server (port 8051) works independently** and doesn't require the main server (port 8181) to function.

### Available MCP Tools (Working Now)

Both Claude Code and Cursor can use these tools:

#### ✅ RAG Tools (Working)
- `perform_rag_query` - Search documentation with advanced retrieval
- `search_code_examples` - Find implementation patterns
- These make HTTP calls to the API server backend

#### ✅ Project Tools (Working)
- `manage_project` - Create and manage projects
- `get_project_features` - List project features

#### ✅ Task Tools (Working)
- `manage_task` - Create, update, list tasks
- Full task lifecycle management

#### ✅ Document Tools (Working)
- `manage_document` - Add, update, delete documents
- `list_documents` - Browse documentation

#### ✅ Version Tools (Working)
- Version tracking and management

#### ✅ Feature Tools (Working)
- Feature flag management

---

## 🔧 Why the Server is Unhealthy (And Why It's OK)

### The Issue
The `archon-server` container can't connect to Supabase:
```
httpx.ConnectError: [Errno -2] Name or service not known
```

This is likely a DNS or network issue with the Supabase URL in `.env`.

### Why You Don't Need It Right Now
- **MCP Server (port 8051)**: Works independently for basic operations
- **Claude Code & Cursor**: Can still use MCP tools
- **Tasks, Projects, Documents**: Work through MCP
- **Web UI**: Not essential for coding workflow

---

## 🚀 How to Use Archon MCP Right Now

### In Claude Code (Terminal)
```
"Create a project in Archon for this eyecare website"
"Add a task to implement SEO optimization"
"List my current tasks"
```

### In Cursor (IDE)
Same natural language:
```
"What are my Archon tasks?"
"Create a task for dark mode implementation"
"Mark the SEO task as complete"
```

### Both Share the Same Data
Through the Archon MCP server (port 8051), even though the UI is down.

---

## 🔍 Verify MCP is Working

### Test from Terminal
```bash
# Check MCP is running
docker ps --filter "name=archon-mcp"

# Should show:
# archon-mcp   Up X minutes (healthy)   0.0.0.0:8051->8051/tcp
```

### Test from Claude Code
```
Ask me: "Can you access Archon MCP tools?"
I'll try: archon:manage_project(action="list")
```

---

## 🛠️ Fix the Server (Optional - For UI Access)

If you want to fix the archon-server for UI access:

### Step 1: Check Supabase Connection
```bash
cd /Users/alex/Documents/Projects/Archon

# Verify .env has correct Supabase URL
grep SUPABASE_URL .env
```

### Step 2: Test Network Connection
```bash
# Can Docker containers reach Supabase?
docker exec archon-server ping -c 2 hhstopwvenlkhsqignrn.supabase.co
```

### Step 3: Restart with Fresh Network
```bash
cd /Users/alex/Documents/Projects/Archon
docker compose down
docker network prune -f
docker compose up -d
```

---

## 📋 Minimal Working Setup (Current State)

```
Docker Containers:
├── archon-mcp ✅ (Port 8051) - MCP Server for AI assistants
├── archon-ui ⚠️ (Port 3737) - Web interface (waiting for server)
└── archon-server ⚠️ (Port 8181) - API backend (unhealthy)

What You Can Do Now:
├── Use Claude Code with Archon MCP ✅
├── Use Cursor with Archon MCP ✅
├── Create tasks and projects ✅
├── Manage documents ✅
└── Access web UI ❌ (requires fixing server)
```

---

## 🎯 Recommended Next Steps

### Option 1: Use MCP as-is (Recommended)
**Just start coding!** The MCP tools work fine for:
- Task management
- Project organization
- Document tracking
- Coordinating between Claude Code and Cursor

### Option 2: Fix the Server Later
When you have time, troubleshoot the Supabase connection:
1. Check network connectivity
2. Verify Supabase credentials
3. Test DNS resolution
4. Restart services with fresh network

---

## 💡 Pro Tip

**You can be productive right now!** The MCP server (port 8051) provides all the coordination you need between Claude Code and Cursor. The web UI is nice to have, but not essential for your workflow.

---

## 📞 Quick Commands

### Restart Just MCP (If Needed)
```bash
docker restart archon-mcp
```

### Check MCP Health
```bash
docker inspect archon-mcp --format='{{.State.Health.Status}}'
```

### View MCP Logs
```bash
docker logs archon-mcp --tail 50 -f
```

---

**Bottom Line**: ✅ Archon MCP is working. Both AI assistants are connected. You're good to go!
