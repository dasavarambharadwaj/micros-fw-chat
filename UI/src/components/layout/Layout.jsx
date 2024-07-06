function Layout(props) {
  const { LeftSection, RightSection } = props;
  return (
    <section className="flex text-black dark:text-white h-full">
      <section
        id="left-section"
        className="w-full max-w-80 dark:bg-gray-900 bg-gray-50 dark:border-gray-500 border-gray-300 border-r "
      >
        <LeftSection></LeftSection>
      </section>
      <section id="main-section" className="dark:bg-gray-800 bg-gray-200 grow">
        <RightSection></RightSection>
      </section>
    </section>
  );
}
export default Layout;
