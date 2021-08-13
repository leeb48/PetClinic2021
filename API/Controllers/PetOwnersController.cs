using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.PetOwners;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class PetOwnersController : BaseController
    {

        [HttpGet]
        public async Task<ActionResult<List<PetOwner>>> GetAllPetOwners()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<List<PetOwner>>> GetPetOwnerById(Guid id)
        {
            return HandleResult(await Mediator.Send(new Detail.Query { Id = id }));
        }

        [HttpPost]
        public async Task<IActionResult> CreatePetOwner(PetOwner petOwner)
        {
            return HandleResult(await Mediator.Send(new Create.Command { PetOwner = petOwner }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePetOwner(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePetOwner(Guid id, PetOwner petOwner)
        {
            petOwner.Id = id;

            return HandleResult(await Mediator.Send(new Edit.Command { PetOwner = petOwner }));
        }

    }
}