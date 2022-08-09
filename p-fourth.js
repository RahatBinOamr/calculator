

function bestFriend(friends)
  {
    var max_str = friends[0].length;
    var ans = friends[0];
    for (var i = 1; i < friends.length; i++) {
        var maxi = friends[i].length;
        if (maxi > max_str) {
            ans = friends[i];
            max_str = maxi;
        }
    }
    return ans;
}
const friends = ["erfan", "shahid", "rakib" , 'riead' , 'mojammel' ,'heroAlomBewst'];
const result = bestFriend(friends);
console.log(result);
