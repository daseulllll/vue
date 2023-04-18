<!-- eslint-disable vue/multi-word-component-names -->
<template>
<div>
    <div>
        <span>뉴스 스탠드</span>
    </div>
    <div class="newstable">
        <table>
            <tr v-for="list in realNews" :key="list">
                <td v-for="li in list" :key="li">
                    <a :href="li.link"><img :src="li.label"></a>
                </td>
            </tr>
        </table>
    </div>
</div>
</template>

<script>
import db from '../../../db.json'

const tabledb = db.news;

let bigNews = [];
let realNews = [];


tabledb.map((item,index)=>{
    index++;
    if(index %6 !==0 && index !== 0){
        bigNews.push(item)
        console.log('big------',bigNews)
    }else{
        bigNews.push(item)
        realNews.push(bigNews)
        bigNews=[]
        console.log('=========small======',realNews)

    }
})

export default{
    
    data() {
        return {
            tabledb,
            realNews
        }
    }
}

</script>


<style lang="scss" scoped>
.newstable {
  position: relative;
  float: left;
//   padding: 100px;
  display: flex;
  width: 100%;
  // height: 325px;
  line-height: 100px;

  table {
    text-align: center;
    border-collapse: collapse;
    // background-color: red;
    width: 100%;
    border: 1px solid #c8c8c8;
    text-align: center;
  }
  tr,td {
    border-right: 1px solid;
    border-bottom: 1px solid #c8c8c8;
  }
  // img {
  // padding-left: 100%;
  // }
}

</style>