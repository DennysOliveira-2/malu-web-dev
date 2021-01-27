import { useLocation } from "react-router-dom"

type Location = {
    state: {
        selected: []
    }
}

interface Selected {
    id: number,
    selected?: boolean
}


export default function PressData() {
    const location: Location = useLocation();
    const from = location.state;
    const selectedObjs = from.selected;

    // Array in JSON format
    console.log('object array')
    console.log(selectedObjs)

    // const arl = selectedObjs.slice();
    
    

    
  
    // // Transforms array into a simple array with Selected Position (id)
    // const newArr = selectedObjs.map((obj: Selected) => {
    //     return obj.id;
    // });

    // // Simple arr format
    // console.log('unsorted array:')
    // console.log(newArr)

    
    // // Sort asc order
    // let sortedArr = newArr.sort((a, b) => a - b)
    // console.log('sorted array')
    // console.log(sortedArr)

    // const fArr = fillArr(sortedArr);
    // console.log('fArr')
    // console.log(fArr)

    // // for (let i = 0; i < 10; i++) {
    // //    console.log(`checking if ${i} === ${sortedArr[i]}`)
    // //    if (i === sortedArr[i]) {
    // //        console.log(`${[i]} is selected.`)
    // //    } else {
    // //        console.log(`${[i]} is not selected.`)
    // //    }
    // // }

    // function fillArr(arr: Array<number>) {
    //     const arrLenght = arr.length;
    //     const missing = 10 - arrLenght;

    //     let finalArray = [{}]
    //     let filled: Array<number>;
    //     filled = arr.slice();
        
    //     for (let i = 0; i < 10; i++) {
    //         if (filled[i] === i) {
    //             finalArray[i] = {
    //                 selected : true,
    //                 id : filled[i]
    //             }
    //         } else {
    //             finalArray[i] = {
    //                 selected : false,
    //                 id : i 
    //             }
    //         }
    //     }
    //     return finalArray;
    // }

    return (
        <div>Press data.</div>
    )
}