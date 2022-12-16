import React,{useState,useEffect} from 'react'
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import {render} from 'react-dom';
import {arrayMoveImmutable} from 'array-move';

const SortableItem = SortableElement(({value}) => <li>{value}</li>);

const SortableList = SortableContainer(({items}) => {
  return (
    <ul style={{background:'white'}}>
      {items.map((value, index) => (
        <SortableItem key={`item-${value?.lable}`} index={index} value={value?.lable} />
      ))}
    </ul>
  );
});

export const ReArrangeCard = () => {
    const [items, setItems] = useState([
    {lable:'item1',index:0},
    {lable:'item2',index:1},
    {lable:'item3',index:2},
    {lable:'item4',index:3},
    {lable:'item5',index:4},
    {lable:'item6',index:5}
]);
    const swapElements = (myArray, index1, index2) => {
        [myArray[index1], myArray[index2]] = [myArray[index2], myArray[index1]];
        console.log('myArray',myArray)
        return myArray
    };
    console.log('finalArray',items)
   
  const onSortEnd = ({oldIndex, newIndex}) => {
    console.log('oldIndex',oldIndex,newIndex)
    setItems(swapElements(items,oldIndex,newIndex))
      };
      return(
         <SortableList items={items} onSortEnd={onSortEnd}  />
      )
    

}

