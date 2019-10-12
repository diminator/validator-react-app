const decodeHash = (hash: string) => {
  return (hash && hash.length) ? "0" + hash.substr(1) : ""
}

export default decodeHash
