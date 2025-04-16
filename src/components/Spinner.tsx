const Spinner = () => {
  return (
    <div className="flex justify-center relative">
      <div className="flex flex-col items-center justify-center">
        <img
          src="/assets/elements/spinner.svg"
          className="relative max-w-[10vw] md:max-w-[10vw] lg:max-w-[10vw] flex flex-col items-center justify-center"
        />
      </div>
    </div>
  );
};

export default Spinner;
