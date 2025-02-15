function searchComments() {
	let keyword = document.getElementById("keywordInput").value;

	fetch(`http://localhost:9002/searchComments?keyword=${keyword}`)
		.then(response => response.json())
		.then(data => {
			let resultDiv = document.getElementById('searchResults');
			resultDiv.innerHTML = "";

			if (data.length === 0) {
				resultDiv.innerHTML = "<p class='text-gray-500'>검색 결과가 없습니다.</p>";
				return;
			}

			data.forEach(comment => {
				console.log(comment);
				resultDiv.innerHTML += `
						<div class="border-b border-gray-300 py-4">
							<div class="flex items-start space-x-4">
								<img src="${comment.commenterProfilepath}" class="w-10 h-10 rounded-full">
										
								<div class="flex-1">
									<div class="flex justify-between">
										<span class="font-semibold">${comment.commenter}</span>
										<span class="text-sm text-gray-500">${comment.datetime}</span>
									</div>
										                
									<p class="mt-1 text-gray-700">${comment.commentContent}</p>
								</div>
							</div>
						</div>
					`;
			});
		});
}
function searchSubscrubeingUsername() {
	let name = document.getElementById("subscribingName").value;

	fetch(`/selectByMySubscribingUsername?name=${name}`)
		.then(response => response.json())
		.then(data => {
			let resultDiv = document.getElementById('subscribingUserSearchResults');
			resultDiv.innerHTML = "";

			if (!Array.isArray(data) || data.length === 0) {
				resultDiv.innerHTML = "<p class='text-gray-500'>검색 결과가 없습니다.</p>";
				return;
			}

			console.log("데이터 :", data);

			data.forEach(user => {
			    resultDiv.innerHTML += `
					<div class="border-b border-gray-300 py-4">
					    <div class="flex items-start space-x-6">
					        <!-- Profile Image -->
					        <a href="/channel/${ user.subscription.subscribingName || '알 수 없음' }">
					            <img src="${ user.creator.profileImgPath || '/default-profile.png' }" class="w-16 h-16 rounded-full object-cover">
					        </a>
	
					        <div class="flex-1">
					            <!-- Creator Name and Subscribe Info -->
					            <div class="flex justify-between items-center">
					                <a href="/channel/${ user.creator.creatorName || '알 수 없음' }" class="font-semibold text-xl">
					                    ${ user.creator.creatorName || '알 수 없음' }
					                </a>
					                <p class="text-gray-500 text-sm">구독자 수 : ${ user.creator.subscribe || 0 }</p>
					            </div>
	
					            <!-- Email and Subscribed At -->
					            <div class="mt-2 text-gray-600">
					                <p class="text-sm">이메일 : ${ user.creator.creatorEmail || '알 수 없음' }</p>
					                <p class="text-sm">구독일 : ${ user.subscription.subscribedAt || '알 수 없음' }</p>
					            </div>
	
					            <!-- Bio Section -->
					            <div class="mt-4 text-gray-700">
					                <p class="text-sm">소개말 : ${ user.creator.bio || '알 수 없음' }</p>
					            </div>
					        </div>
					    </div>
					</div>
			    `;
			});
		})
		.catch(error => console.error("데이터 전송 중 오류 : ", error));
}