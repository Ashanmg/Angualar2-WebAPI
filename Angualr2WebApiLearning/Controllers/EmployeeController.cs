using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Angualr2WebApiLearning.Controllers
{
    public class EmployeeController : ApiController
    {
        public IEnumerable<Employee> GetAllEmployeeDetails()
        {
            using (ANGULAR2_WEBAPIEntities entities = new ANGULAR2_WEBAPIEntities())
            {
                return entities.Employees.ToList();
            }
        }

        public Employee GetEmployeeDetail(string code)
        {
            using (ANGULAR2_WEBAPIEntities entities = new ANGULAR2_WEBAPIEntities())
            {
                return entities.Employees.FirstOrDefault(e => e.code == code);
            }
        }
    }
}
