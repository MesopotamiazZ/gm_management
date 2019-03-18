import methods from '@/api/method'

export function getHomeTableData () { // 获取home表格数据
  return methods.get(`/homeTable`)
}
