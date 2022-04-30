function getLyric(id = 1456215403) {
  const url = `http://music.163.com/api/song/media?id=${id}`;
  console.log(url)

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      const { code, lyric } = data;

      if (code !== 200) {
        throw new Error(`code ${code}`);
      }
      return lyric;
    })
}
