import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

// index.jsから呼ばれる
function App() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  // const genres = ["洋食","和食","中華","イタリアン・フレンチ","焼き肉・ホルモン","お好み焼き・もんじゃ","居酒屋","ラーメン"]
  // const budgetOptions =["500","1000","2000","3000","4000","5000"]

  // const [filterAttr, setFilterAttr] = useState({"checkedgenres": [], "budget": 1000})

  // const [show, setShow] = useState(false);


  // const shops = Data["results"]["shop"];

  // const [filteredShops, setFilteredShops] = useState([])

  // const handleCheckboxChange= (genre) =>{ //checkboxの入力に基づいて配列にアイテムを加えてる
  //        setFilterAttr(prevfilterAttr => {
  //         if (prevfilterAttr.checkedgenres.includes(genre)){
  //             return{
  //                 ...prevfilterAttr,
  //                 "checkedgenres" :prevfilterAttr.checkedgenres.filter(g => g !=genre)
  //             }
  //         }else{
  //             return{
  //                 ...prevfilterAttr,
  //                 "checkedgenres" :[...prevfilterAttr.checkedgenres, genre]
  //             }
  //         }
  //     })
  // }

  // const handleBudgetChange=(event) =>{
  //        setFilterAttr(prevfilterAttr => ({
  //         ...prevfilterAttr,
  //         "budget" :parseInt(event.target.value)
  //     }))
  // }

  // return (
  //   <div className="App">
  //     <Header />
  //       <Question
  //         genres={ genres }
  //         budgetOptions={ budgetOptions }
  //         filterAttr={ filterAttr }
  //            setFilterAttr={    setFilterAttr }
  //         handleCheckboxChange={ handleCheckboxChange }
  //         handleBudgetChange={ handleBudgetChange }
  //       />
  //       <button onClick={() => {
  //         setFilteredShops(FilterShops(shops, filterAttr));
  //         setShow(true)
  //       }}>
  //         今日のご飯を決める！
  //       </button>
  //       {
  //         show && <SuggestShops filteredShops={ filteredShops } shops = { shops }/>
  //       }
  //       <Footer />
  //   </div>
  );
}

export default App;
