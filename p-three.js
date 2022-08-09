function  paperRequirements(firstBook , secondBook, thirdBook){
    const firstBookPage = 100;
    const secondBookPage = 200;
    const thirdBrookPage = 300;
    

    const totalFirstBookPage  = firstBookPage * firstBook;
    const totalsSecondBookPage = secondBookPage * secondBook;
    const totalThirdBookPage = thirdBrookPage * thirdBook;
    const totalPage = totalFirstBookPage + totalsSecondBookPage + totalThirdBookPage;
    return totalPage;

}
const totalPage = paperRequirements(0 , 20, 0);
console.log(totalPage);
 