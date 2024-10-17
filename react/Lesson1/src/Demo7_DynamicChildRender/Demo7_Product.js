
function Demo7_ProductComp(props) {
  return (
    <div>
    <div style={ { width : "300px",  border : "solid 1px blue"} } >
      
    <h5>Product Data</h5>

    Name : {props.prodData.name} <br/>
    Price : {props.prodData.price} <br/>

</div>
<br/>
</div>
  );
}

export default Demo7_ProductComp;
