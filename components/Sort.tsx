"use client"

import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { usePathname, useRouter } from 'next/navigation'
import { sortTypes } from './constants'

const Sort = () => {
  const path = usePathname(); 
  const router = useRouter();
  
  console.log(path);
  console.log(router);

  const handleSort = async (value: string) => {
    router.push(`${path}?sort=${value}`);
  } 
  
  return (
    <Select onValueChange={handleSort} defaultValue={sortTypes[0].value}>
      <SelectTrigger className="sort-select">
        <SelectValue placeholder={sortTypes[0].label} />
      </SelectTrigger>

      <SelectContent className='sort-select-content'>
        {sortTypes.map((s)=> (
          <SelectItem className='shad-select-item' value={s.value}>{s.label}</SelectItem>
        ))}
      </SelectContent>
    </Select>

  )
}

export default Sort