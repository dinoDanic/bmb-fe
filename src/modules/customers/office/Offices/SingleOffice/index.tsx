import styled from '@emotion/styled'
import { Box } from '@kodiui/kodiui'
import { Office } from 'generated/graphql'
import { SelectBox } from 'styles'

export const SingleOffice = ({ office }: { office: Office }) => {
  return (
    <StyledBox>
      <h5>{office?.name}</h5>
      <p>{office.address}</p>
    </StyledBox>
  )
}

const StyledBox = styled(Box)`
  ${SelectBox}
`
