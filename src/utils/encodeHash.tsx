const encodeHash = (hash: string) => {
  return (hash.length) ? "\\" + hash.substr(1) : ""
}

export default encodeHash
