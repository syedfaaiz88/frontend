import { ImSpinner2 } from 'react-icons/im'; // Importing a spinner icon
import classNames from 'classnames';

function Button({ children, primary, secondary, success, warning, danger, outline, rounded, isLoading, ...rest }) {
  const classes = classNames(
    rest.className,
    `flex items-center border ${isLoading ? 'rounded-full p-2': 'px-3 py-1.5'}`,
    {
      'border-blue-500 bg-blue-500 text-white': primary && !outline,
      'border-gray-900 bg-gray-900 text-white': secondary && !outline,
      'border-green-500 bg-green-500 text-white': success && !outline,
      'border-yellow-400 bg-yellow-400 text-white': warning && !outline,
      'border-red-500 bg-red-500 text-white': danger && !outline,
      'rounded-full': rounded,
      'bg-white border border-blue-500 text-blue-500': outline && primary,
      'bg-white border border-gray-900 text-gray-900': outline && secondary,
      'bg-white border border-green-500 text-green-500': outline && success,
      'bg-white border border-yellow-400 text-yellow-400': outline && warning,
      'bg-white border border-red-500 text-red-500': outline && danger,
    }
  );

  return (
    <button {...rest} className={classes} disabled={isLoading}>
      {isLoading ? (
        <ImSpinner2 className="animate-spin" /> // Display the spinner when loading
      ) : (
        children
      )}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        'Only one of primary, secondary, success, warning, danger can be true'
      );
    }
  },
};

export default Button;
