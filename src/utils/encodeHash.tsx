const encodeHash = (hash: string) => {
  return "\\" + hash.substr(1)
}

export default encodeHash
