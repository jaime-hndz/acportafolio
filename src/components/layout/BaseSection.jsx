import PropTypes from 'prop-types';


export const BaseSection = ({ children, id }) => {



  return (
    <div
      className={`bg-gradient-to-r  from-indigo-900 via-red-900 to-orange-600 w-full min-h-screen flex items-center justify-center relative`}
      id={id}
    >


      {id !== 'home' && <div className="absolute top-0 left-0 w-full h-full" />}
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

BaseSection.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired
};