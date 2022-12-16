import React, {useState,useEffect} from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) => <li className='quest_check p-2 mb-4'>{value}</li>)

const SortableList = SortableContainer(({items}) => {
  return (
    <ul className="drag-list">
      {items.map((value, index) => (
        // <div className='quest_check p-2 d-flex mb-4'>
        <SortableItem key={`item-${value?.index}`} index={index} value={value?.text} />
        // </div>
      ))}
    </ul>
  );
});

export const OptionWrapper = ({
  options,
  selectedOption,
  handleSelect
}) => {
    const [items, setItems] = useState([]);
    useEffect(()=>{
    if(options?.length) setItems(options)
    },[options])

    // useEffect(()=>{
    //   if(items?.length)handleSelect(items)
    // },[items])
console.log('rtrr',items,selectedOption)
    
    const swapElements = (myArray, index1, index2) => {
        [myArray[index1], myArray[index2]] = [myArray[index2], myArray[index1]];
        return myArray;
    };
  const onSortEnd = ({oldIndex, newIndex}) => {
    // setItems(swapElements(items,oldIndex,newIndex))
    // console.log('swap',swapElements(items,oldIndex,newIndex))
  let res=swapElements(items,oldIndex,newIndex)
    handleSelect(res)
      };
      return(
         <SortableList items={items} onSortEnd={onSortEnd}/>
      )
}