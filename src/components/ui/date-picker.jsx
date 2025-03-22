import * as React from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'

import { cn } from '../../lib/utils'
import { Button } from './button'
import { Calendar } from './calendar'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

export function DatePicker ({ value, onChange, className, placeholder = 'Pick a date' }) {
  const [open, setOpen] = React.useState(false)

  const handleSelect = date => {
    onChange(date)
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant='outline' className={cn('w-full justify-start text-left font-normal', !value && 'text-secondary-400', className)}>
          <CalendarIcon className='mr-2 h-4 w-4' />
          {value ? format(value, 'MM/dd/yy') : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0 bg-secondary-800 border-secondary-700 text-white'>
        <Calendar className='text-white' initialFocus mode='single' onSelect={handleSelect} selected={value} />
      </PopoverContent>
    </Popover>
  )
}
