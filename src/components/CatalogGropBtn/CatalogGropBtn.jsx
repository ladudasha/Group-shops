import s from "./CatalogGropBtn.module.scss"



export default function CatalogGropBtn(props) {
  return (
    <button className={s.btnMeta}>{props.name}</button>
    
  );
}
