//apiroutes
app.get("/api/friends", function(req, res) {
  return res.json(friends);
});
app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newFriend = req.body;
    friends.push(newFriend);
    res.send(true);
});