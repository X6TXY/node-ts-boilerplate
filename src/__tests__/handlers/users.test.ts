import { mockReponse, mockRequest } from "../../__mocks__";
import { getUsers } from "../../handlers/users";


describe('getUsers',()=>{
    it('should return an array of users',()=>{
        getUsers(mockRequest ,mockReponse );
        expect(mockReponse.send).toHaveBeenCalledWith([]);
    })
})