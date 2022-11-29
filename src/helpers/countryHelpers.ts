
// We dont know the keys cause it's different per country so we get them by values
export const getNativeName = (object :object) :string|any => {
  const firstProp = Object.values(object)[0]
  //Second prop of first prop
  const secondProp = Object.values(firstProp)[1]
  return secondProp
}
// We dont know the keys cause it's different per country so we get them by values
export const getCurrency = (object :object) :string|any => {
  const firstProp = Object.values(object)[0]
  //First prop of first prop
  const fpoFirstProp = Object.values(firstProp)[0]
  return fpoFirstProp
}

// We dont know the keys cause it's different per country so we get them by values
export const getLanguage = (object :object) :string|any => {
  const values:string[] = Object.values(object)
  return `${values.join(", ")}`
}

export const formatPopulation = (population : number): string => {
  const nf = new Intl.NumberFormat()
  
return `${nf.format(population)}`
}
