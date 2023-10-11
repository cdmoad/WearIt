
export function liveSearch(search,searchItem,elements){

    const searchQuery = search.toLowerCase();

    const filteredElements = elements?.filter((element) => {
      const elementValue = element[searchItem].toString().toLowerCase();
      return elementValue.includes(searchQuery);
    });

    return filteredElements; 


}
