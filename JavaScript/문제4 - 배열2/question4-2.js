const companies = ['Samsung', 'LG', 'Google', 'Facebook', 'Amazon']
const copyedCompanies = [...companies]
const companiesReversed = []


companies.forEach(function(company){
    console.log(companies.length)
    // 사용하고 싶은 배열의 원본을 가져와서 pop을 사용하면
    // 원본이 계속해서 변화되기 때문에 속성이 원하는대로 적용되지 않음.
    companiesReversed.push(copyedCompanies.pop())
})

console.log(companies)
console.log(companiesReversed)