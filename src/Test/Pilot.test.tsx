import PilotsList from "../components/Pilots/Pilots";

import{describe,it, expect} from 'vitest';

describe('PilotsList',()=>{
    it('should be a function',()=>{
        expect( PilotsList).toBeTypeOf('function');
    });
    it('should render correctly',()=>{
        expect(PilotsList).toMatchSnapshot();
    });
    
    
})