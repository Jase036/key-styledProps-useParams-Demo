const Item = ({ name }) => {
  return (
    <div className="form-group">
      <label className="col-xs-4 control-label">{name}</label>
      <div className="col-xs-8">
        <input type="text" className="form-control" />
      </div>
    </div>
  );
};

export default Item;
