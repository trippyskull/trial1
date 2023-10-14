function popup({
  groupingOption,
  orderingOption,
  onGroupingChange,
  onOrderingChange,
}) {
  return (
    <div className="popup">
      <span>
        <label htmlFor="groupingDropdown">Grouping</label>
        <select
          id="groupingDropdown"
          value={groupingOption}
          onChange={(e) => onGroupingChange(e.target.value)}
        >
          <option value="ByStatus">Status</option>
          <option value="ByUser">User</option>
          <option value="ByPriority">Priority</option>
        </select>
      </span>
      <span>
        <label htmlFor="orderingDropdown">Ordering</label>
        <select
          id="orderingDropdown"
          value={orderingOption}
          onChange={(e) => onOrderingChange(e.target.value)}
        >
          <option value="Priority">Priority</option>
          <option value="Title">Title</option>
        </select>
      </span>
    </div>
  );
}

export default popup;
