const Footer = ({ items }) => {
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage = (numPackedItems / numItems) * 100;
  return (
    <div className="footerWrapper">
      {percentage === 100
        ? "Shopping Done"
        : `Total Item:${numItems}------Completed Item:${numPackedItems}
      ------Percentage:${percentage}%`}
    </div>
  );
};
export default Footer;
