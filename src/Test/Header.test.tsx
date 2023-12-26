import HeaderCom from "../components/Header/Header";

import{describe,it, expect} from 'vitest';

describe('HeaderCom',()=>{
    it('should be a function',()=>{
        expect( HeaderCom).toBeTypeOf('function');
    });
    it('should render correctly',()=>{
        expect(HeaderCom).toMatchSnapshot();
    });
    
    
})