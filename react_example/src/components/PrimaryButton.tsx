type PrimaryButtonProps = {
    action?: string
}
const PrimaryButton = ({action="Add"}: PrimaryButtonProps) => {
  return (
    <button>
        click to {action}
    </button>
  )
}

export default PrimaryButton