import http.server
import socketserver
import os

os.chdir('/home/user/workspace/9zero-dashboard')
Handler = http.server.SimpleHTTPRequestHandler
with socketserver.TCPServer(("", 3000), Handler) as httpd:
    httpd.serve_forever()
