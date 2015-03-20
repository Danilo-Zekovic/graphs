load("graph2.js");

g = new Graph(10);
g.addEdge(1,2);
g.addEdge(1,4);
g.addEdge(2,3);
g.addEdge(4,2);
g.addEdge(3,5);
g.addEdge(3,6);
g.addEdge(4,7);
g.addEdge(7,5);
g.addEdge(7,10);
g.addEdge(10,9);
g.addEdge(9,8);
g.addEdge(8,5);
g.addEdge(6,5);

g.bfs();
var vertex = 8;
var source = 1;
var path = g.pathTo(source, vertex);
g.showPath(paths);
