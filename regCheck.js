function regCheck (reg, loc){
  return reg.endsWith (loc) || reg.startsWith(loc)
}