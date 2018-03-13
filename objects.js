var playlist = {singer1 :"singerA", singer2: "singerB"}

function updatePlaylist(playlist, object, string) {
  return Object.assign ({ },
  playlist, {[object] : value})
}


  1) objects updatePlaylist(playlist, artistName, songTitle)