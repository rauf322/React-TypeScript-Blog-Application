import { PaginationProps } from '../../../Interfaces';
import { Span } from '../span/MySpan';


const Pagination = ({page,pages_button,setPage}:PaginationProps) => {
    return (
        <div style={{marginTop:"30px"}}>
        {pages_button.map((p) =>
          <Span className={page === p ? 'span_current' : 'span'} key={p} onClick={() => setPage(p)}>{p}</Span>
        )}
      </div>
    );
};

export default Pagination;