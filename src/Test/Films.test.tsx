import FilmList from "../components/Films/Films";

import{describe,it, expect} from 'vitest';

describe('FilmList',()=>{
    it('should be a function',()=>{
        expect( FilmList).toBeTypeOf('function');
    });
    it('should render correctly',()=>{
        expect(FilmList).toMatchSnapshot();
    });
    
    
})