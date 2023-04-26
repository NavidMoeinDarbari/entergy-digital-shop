const titleSplitter = (title, type) => {
   const splittedTitle = title.split(' ')
   if(type === 'short' && splittedTitle.length > 2) {
      splittedTitle.length = 3
      const newTitle = splittedTitle.join(' ');
      return newTitle
   }
   else if(type === 'long' && splittedTitle.length > 7) {
      splittedTitle.length = 5
      const newTitle = splittedTitle.join(' ');
      const finalTitle = newTitle.concat(' ...') 
      return finalTitle
   }
}
export default titleSplitter;