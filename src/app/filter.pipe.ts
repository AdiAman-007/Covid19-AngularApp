import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  transform(items: any, searchText: string): any{
    let filterList:any=[];
    if(!searchText){
      return items;
    }
    else{
      for(let it in items){
        if(items[it]['state'].toLowerCase().startsWith(searchText.toLowerCase())){
          filterList.push(items[it]);
        }
      }
      return filterList;
    }
  }
}
