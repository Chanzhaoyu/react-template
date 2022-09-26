import React from 'react'

export type SvgIconProps = {
  name: string
  prefix: string
  color: string
}

export const SvgIcon: React.FC<SvgIconProps> = (props) => {
  const { name, prefix = 'icon', color = '#333', ...rest } = props
  const symbolId = `#${prefix}-${name}`

  return (
    <svg {...rest} aria-hidden="true">
      <use href={symbolId} fill={color} />
    </svg>
  )
}
