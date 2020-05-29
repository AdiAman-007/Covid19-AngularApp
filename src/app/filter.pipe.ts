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

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {
  transform(items: any, page: number): any{
    let data = items;
    let filterList:any=[];
    if(page==0 && data){
      for(let i=page; i<page+13; i++){
        filterList.push(data[i]);
      }
      return filterList;
    }
    else if(data){
      for(let i=(page*10+2); i<page*10+13; i++){
          if(data[i]){
            filterList.push(data[i]);
          }
      }
      return filterList;
    }
  }
}

