import array from 'lodash/array'
import { fromUnixTime, format } from 'date-fns'

// { weekday, iconSrc, temp, desc }
export default (arr)=>{
  const list = array.chunk(arr,8)
  const resultList = list.map((item)=>{
    let {
      main: { temp},
      weather: [{ main: desc, icon }],
      dt
    } =  array.nth(item,3)
    const timezone = 36000
    const timeStamp = dt + timezone;
    const weekday = format(fromUnixTime(timeStamp), "iiii")
    temp = Number(temp - 273.15).toFixed(0)
    icon = String(icon).replace("n","d")
    
    const iconSrc = `http://openweathermap.org/img/wn/${icon}@2x.png`
   return { timeStamp, weekday, iconSrc, temp, desc }
   })

  return resultList;
}