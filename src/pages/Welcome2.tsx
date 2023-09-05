import * as React from 'react'
import styled from 'styled-components'

const Bordered = styled.div`
  border: 1px solid blue;
`
export const Welcome2: React.FC = () => {
  return (
    <div>
      <Bordered>
        沙鲨记账2
      </Bordered>
    </div>
  )
}